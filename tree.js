class Tree{
    constructor(x,y){
        this.width=600;
        this.height=700;
       
        this.tree= createSprite(x,y, this.width,this.height);
        this.tree.addImage(treeImg);
        this.tree.scale=0.5;
    }

}