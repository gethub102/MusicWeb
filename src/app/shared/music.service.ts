import { Subject } from 'rxjs/Subject';

export class MusicService {
  addFavorite = new Subject();
}
