
//Restitution: Determina o quanto o corpo do objeto (body) irá "saltar/quicar" após a colisão.
//Friction: Determina o atrito entre o corpo do objeto(body) e o que ele toca.
//Density: Determina o peso do objeto(body). Quanto mais ou menos pesado, a partir da
//forma que este objeto se movimenta e/ou cai , ao ser mostrado na tela, será possível notar diferenças significativas

//Inicie a classe Boat
//Defina o constructor com x, y, width, height, boatPos e boatAnimation
//Dentro da variável options defina para 0.8 o o quanto o corpo do objeto (body) irá "saltar/quicar" após a colisão.
//Dentro da variável options defina para 1.0 o atrito entre o corpo do objeto(body) e o que ele toca.
//Dentro da variável options defina para 1.0  o peso do objeto(body).
???
    this.animation = boatAnimation;
    this.speed = 0.05;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    this.boatPosition = boatPos;
    //Carregue a imagem do barco(boat.png)
    ???
    //Adicione o'this.body' ao mundo
    ???
  }
  animate() {
    this.speed += 0.05 % 1.1;
  }

   remove(index) {
      Matter.World.remove(world, boats[index].body);
      boats.splice(index, 1);
    
  }
  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    var index = floor(this.speed % this.animation.length);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[index], 0, this.boatPosition, this.width, this.height);
    noTint();
    pop();
  }
}
