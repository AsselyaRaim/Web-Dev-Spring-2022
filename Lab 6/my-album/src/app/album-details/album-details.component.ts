import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../albums';
import { AlbumsService } from '../albums.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  album!: Album;
  loaded!: boolean;

  constructor(private route: ActivatedRoute,
              private albumsService: AlbumsService,
              private location: Location) { }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(){
    this.loaded = false;
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null){
        this.albumsService.getAlbum(+id).subscribe((album) => {
          this.album = album;
          this.loaded = true;
        })
      }
    })
  }

  updateAlbum(album: Album){
    this.albumsService.updateAlbum(album).subscribe((album) => {
      console.log(album);
    })
  }

  goBack() {
    this.location.back();
  }

}
