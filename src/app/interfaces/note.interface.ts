export interface Note {
    id?: string; // ? bedeutet optional
    type: "note" | "trash";
    title:string;
    content:string;
    marked: boolean;
}



