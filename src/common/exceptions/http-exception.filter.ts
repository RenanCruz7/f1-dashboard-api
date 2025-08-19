import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response, Request } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    
    // Determinar o status do erro
    const status = 
      exception instanceof HttpException 
        ? exception.getStatus() 
        : HttpStatus.INTERNAL_SERVER_ERROR;
    
    // Extrair a mensagem de erro
    let message: string | string[] = exception.message || 'Ocorreu um erro interno';
    let error = exception.name || 'Error';
    
    // Tratar erros de validação de forma especial
    if (exception.response && exception.response.message) {
      message = exception.response.message;
      error = exception.response.error || 'Erro de Validação';
    }

    // Tratar erros de banco de dados especificamente
    if (exception.name === 'QueryFailedError') {
      if (exception.message.includes('not-null')) {
        message = 'Campo obrigatório não foi preenchido';
        error = 'Erro de Validação de Dados';
      } else if (exception.message.includes('duplicate key')) {
        message = 'Registro duplicado encontrado';
        error = 'Conflito de Dados';
      }
    }

    // Log do erro para debug no servidor
    console.error(`[${new Date().toISOString()}] Error:`, exception);

    // Resposta padronizada
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
      error
    });
  }
}
