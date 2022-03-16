import { Component, OnInit } from '@angular/core';
import { Photo } from '../albums';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {

  albumId!: number;
  photos!: Photo[];

  constructor(private route: ActivatedRoute,
              private albumsService: AlbumsService,
              private location: Location) { }

  ngOnInit(): void {
    this.showPhotos();
  }

  showPhotos() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null){
        this.albumId = +id;
        this.albumsService.showPhotos(+id).subscribe((photos) => {
          this.photos = photos;
        })
      }
    })
  }

  goBack() {
    this.location.back();
  }

}
