class Room {
    constructor(id, money, ...doors) {
        this.id = id;
        this.money = parseInt(money);
        this.doors = doors;
        this.total = 0;
    }
}
const BUILDING = {};

const N = parseInt(readline());

// Fill the building with rooms
for (let i = 0; i < N; i++) {
    const room = new Room(...readline().split(' '));
    BUILDING[room.id] = room;
}

const shutUpAndTakeMyMoney = (roomId, max) => {
    if (roomId === 'E') return 0;
    
    const room = BUILDING[roomId];
    
    // If the total of this room is already bigger then the maximum of this path it's not necessary to continue
    if (room.total > max) return 0;
    
    // Save the new maximum for this room
    room.total = max;
    
    const pricesOfTheMostProfitableRooms = room.doors.map(doorId => shutUpAndTakeMyMoney(doorId, max + room.money));
    return room.money + Math.max(...pricesOfTheMostProfitableRooms);
}

console.log(shutUpAndTakeMyMoney('0', 0));
