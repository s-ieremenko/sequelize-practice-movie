import { IsUUID, Sequelize } from 'sequelize-typescript';
import express, { Express } from 'express';

import { v4 as uuidv4 } from 'uuid';

import { port, app, sequelize } from './constants';
import Movie from './models/movie.model';
import Actor from './models/actor.model';
import Director from './models/director.model';
import Assistant from './models/assistant.model';

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
  sequelize
    .authenticate()
    .then(async () => {
      try {
        await sequelize.sync({ force: true });

        const movie1 = await Movie.create({ name: 'Avatar' });
        const movie2 = await Movie.create({ name: '5 element' });
        const movie3 = await Movie.create({ name: 'Coloboc' });
        const movie4 = await Movie.create({ name: 'Elka' });
        const movie5 = await Movie.create({ name: 'Tri porosenka' });

        const actor1 = await Actor.create({ name: 'Brad Pitt' });
        const actor2 = await Actor.create({ name: 'Arnold S' });
        const actor3 = await Actor.create({ name: 'Robert D' });

        const director1 = await Director.create({ name: 'Tarantino' });
        const director2 = await Director.create({ name: 'James Cameron' });
        const director3 = await Director.create({ name: 'Hichcoc' });

        const assistant1 = await Assistant.create({ name: 'Vasya' });
        const assistant2 = await Assistant.create({ name: 'Petya' });
        const assistant3 = await Assistant.create({ name: 'Alex' });

        movie1.$add('actors', [actor1, actor2]);
        movie2.$add('actors', [actor3, actor2]);
        movie3.$add('actors', [actor1]);
        movie4.$add('actors', [actor3]);
        movie5.$add('actors', [actor2]);
        director1.$add('movies', [movie5]);
        director1.$set('assistant', assistant1);
        director2.$add('movies', [movie1, movie3]);
        director2.$set('assistant', assistant2);
        director3.$add('movies', [movie4, movie2]);
        director3.$set('assistant', assistant3);
      } catch (error: any) {
        console.log(error.message);
      }
    })
    .catch((error: any) => console.log(error.message));
});
