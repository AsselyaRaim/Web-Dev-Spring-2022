import { Component, OnInit } from '@angular/core';

import { Album } from '../albums';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums!: Album[];
  loaded!: boolean;
  newAlbum!: string;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    })
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumsService.deleteAlbum(id).subscribe(() => {
      console.log("deleted", id);
    })
  }

  addAlbum() {
    const album = {
      title: this.newAlbum
    }
    this.albumsService.addAlbum(album as Album).subscribe((album) => {
      this.albums.push(album);
      this.newAlbum = '';
    })
  }

}
