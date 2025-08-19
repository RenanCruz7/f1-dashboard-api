import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => {
        const response = context.switchToHttp().getResponse();
        
        // Não envolver a resposta se for um download de arquivo ou outro tipo especial
        const contentType = response.getHeader('content-type');
        if (contentType && contentType !== 'application/json') {
          return data;
        }

        // Padronizar a resposta de sucesso
        return {
          statusCode: response.statusCode,
          timestamp: new Date().toISOString(),
          data
        };
      }),
    );
  }
}
