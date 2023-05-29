import { Module } from '@nestjs/common';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { DatabaseModule } from './infra/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ShoppingCartModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '172.25.0.2',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'postgres',
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
