import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";


@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Yoda',
      description: 'Le petit bonhomme vert',
      imageUrl: 'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-yoda-16x9-xl.jpg.adapt.crop16x9.1920w.jpg',
      createdDate: new Date(),
      snaps: 2
    },
    {
      id: 2,
      title: 'Obi Wan',
      description: 'Le meilleur Jedi',
      imageUrl: 'https://www.starwars-universe.com/images/encyclopedie/personnages/images_v6/obi_imv6.jpg',
      createdDate: new Date(),
      snaps: 128,
      location: 'Rennes'
    },
    {
      id: 3,
      title: 'Dark Vador',
      description: 'Le seigneur Sith',
      imageUrl: 'https://le-sabre-laser.fr/cdn/shop/articles/Star-Wars-Dark-Vador_1170x.jpg?v=1680259187',
      createdDate: new Date(),
      snaps: 255,
      location: 'Tataouine les Bains'
    },
    {
      id: 4,
      title: 'Yoda',
      description: 'Le petit bonhomme vert',
      imageUrl: 'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-yoda-16x9-xl.jpg.adapt.crop16x9.1920w.jpg',
      createdDate: new Date(),
      snaps: 2
    },
    {
      id: 5,
      title: 'Obi Wan',
      description: 'Le meilleur Jedi',
      imageUrl: 'https://www.starwars-universe.com/images/encyclopedie/personnages/images_v6/obi_imv6.jpg',
      createdDate: new Date(),
      snaps: 128,
      location: 'Rennes'
    },
    {
      id: 6,
      title: 'Dark Vador',
      description: 'Le seigneur Sith',
      imageUrl: 'https://le-sabre-laser.fr/cdn/shop/articles/Star-Wars-Dark-Vador_1170x.jpg?v=1680259187',
      createdDate: new Date(),
      snaps: 255,
      location: 'Tataouine les Bains'
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
  const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found !');
    } else {
      return faceSnap;
    }
  }
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType == 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;

  }
}
