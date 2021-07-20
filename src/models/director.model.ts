import {
  Model,
  ForeignKey,
  PrimaryKey,
  Column,
  AllowNull,
  NotEmpty,
  HasMany,
  BelongsToMany,
  Table,
  BelongsTo,
  IsUUID,
  IsIn,
  AutoIncrement,
  HasOne,
} from 'sequelize-typescript';
import Assistant from './assistant.model';

import Movie from './movie.model';

@Table({
  tableName: 'directors',
  timestamps: true,
})
class Director extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  name!: string;

  @HasMany(() => Movie)
  movies!: Movie[];

  @HasOne(() => Assistant)
  assistant!: Assistant;
}

export default Director;
