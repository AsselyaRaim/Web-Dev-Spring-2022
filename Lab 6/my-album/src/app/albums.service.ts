import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album, Photo } from './albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  BASE_URL = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/${id}`);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}/id`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.client.put<Album>(`${this.BASE_URL}/${album.id}`, album);
  }

  addAlbum(album: Album): Observable<Album> {
    return this.client.post<Album>(`${this.BASE_URL}`, album);
  }

  showPhotos(id: number): Observable<Photo[]> {
    return this.client.get<Photo[]>(`${this.BASE_URL}/${id}/photos`);
  }

}
