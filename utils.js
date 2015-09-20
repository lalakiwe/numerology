function gridToCoordinate(gridIndex){
	switch(gridIndex) {
		case 0:
			this.x = INIT_POSITION + (SQUARE_SIZE - GRID_LENGTH)*3 + SQUARE_SIZE/2;
			this.y = INIT_POSITION + (SQUARE_SIZE - GRID_LENGTH)*2 + SQUARE_SIZE/2;
			break;
		case 1:
			this.x = INIT_POSITION + SQUARE_SIZE/2;
			this.y = INIT_POSITION + SQUARE_SIZE/2;
			break;
		case 2:
			this.x = INIT_POSITION + SQUARE_SIZE/2;
			this.y = INIT_POSITION + (SQUARE_SIZE - GRID_LENGTH) + SQUARE_SIZE/2;
			break;
		case 3:
			this.x = INIT_POSITION + SQUARE_SIZE/2;
			this.y = INIT_POSITION + (SQUARE_SIZE - GRID_LENGTH)*2 + SQUARE_SIZE/2;
			break;
		case 4:
			this.x = INIT_POSITION + (SQUARE_SIZE - GRID_LENGTH) + SQUARE_SIZE/2;
			this.y = INIT_POSITION + SQUARE_SIZE/2;
			break;
		case 5:
			this.x = INIT_POSITION + (SQUARE_SIZE - GRID_LENGTH) + SQUARE_SIZE/2;
			this.y = INIT_POSITION + (SQUARE_SIZE - GRID_LENGTH) + SQUARE_SIZE/2;
			break;
		case 6:
			this.x = INIT_POSITION + (SQUARE_SIZE - GRID_LENGTH) + SQUARE_SIZE/2;
			this.y = INIT_POSITION + (SQUARE_SIZE - GRID_LENGTH)*2 + SQUARE_SIZE/2;
			break;
		case 7:
			this.x = INIT_POSITION + (SQUARE_SIZE - GRID_LENGTH)*2 + SQUARE_SIZE/2;
			this.y = INIT_POSITION + SQUARE_SIZE/2;
			break;
		case 8:
			this.x = INIT_POSITION + (SQUARE_SIZE - GRID_LENGTH)*2 + SQUARE_SIZE/2;
			this.y = INIT_POSITION + (SQUARE_SIZE - GRID_LENGTH) + SQUARE_SIZE/2;
			break;
		case 9:
			this.x = INIT_POSITION + (SQUARE_SIZE - GRID_LENGTH)*2 + SQUARE_SIZE/2;
			this.y = INIT_POSITION + (SQUARE_SIZE - GRID_LENGTH)*2 + SQUARE_SIZE/2;
			break;
		default:
			this.x = 0;
			this.y = 0;
			
	}
}