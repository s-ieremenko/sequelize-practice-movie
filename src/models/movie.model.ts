import {
  Model,
  ForeignKey,
  PrimaryKey,
  Table,
  Column,
  AllowNull,
  NotEmpty,
  HasMany,
  BelongsToMany,
  Length,
  BelongsTo,
  AutoIncrement,
} from 'sequelize-typescript';
import belongsTo from 'sequelize/types/lib/associations/belongs-to';
import Actor from './actor.model';
import Director from './director.model';

@Table({
  tableName: 'movies',
  timestamps: true,
})
class Movie extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @AllowNull(false)
  @NotEmpty
  @Column
  name!: string;

  @ForeignKey(() => Director)
  directorId!: number;

  @BelongsTo(() => Director)
  director!: Director;

  @BelongsToMany(() => Actor, 'movie_actor', 'actorId', 'movieId')
  actors!: Actor[];
}

export default Movie;
