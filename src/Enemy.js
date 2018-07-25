class Enemy {
    constructor(index, physics, x, y) {
        this.enemy = physics.add.sprite(x, y, 'enemy')
        //this.enemy.name = index.toString();
    }
}

export default Enemy;