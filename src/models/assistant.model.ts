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
  tableName: 'assistants',
  timestamps: true,
})
class Assistant extends Model {
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
}

export default Assistant;
