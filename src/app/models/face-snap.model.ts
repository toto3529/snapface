// export class FaceSnap { 
//     title: string;
//     description: string;
//     imageUrl: string;
//     createdDate: Date;
//     snaps: number;

//     constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number) {
//         this.title = title;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this.createdDate = createdDate;
//         this.snaps = snaps;
// }
// }            au lieu de faire tout les constructeurs, on peut directement mettre le constructeur et les classes public
export class FaceSnap {
    id!: number;
    title!: string;
    description!: string;
    imageUrl!: string;
    createdDate!: Date;
    snaps!: number;
    location?: string; 
}