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
  IsUUID,
  IsEmail,
  BelongsTo,
  HasOne,
  AutoIncrement,
} from 'sequelize-typescript';
import Movie from './movie.model';

@Table({
  tableName: 'actor',
  timestamps: true,
})
class Actor extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @AllowNull(false)
  @NotEmpty
  @Column
  name!: string;

  @BelongsToMany(() => Movie, 'movie_actor', 'actorId', 'movieId')
  movies!: Movie[];
}
export default Actor;
