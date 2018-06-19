import { SearchPlayersModule } from './search-players.module';

describe('SearchPlayersModule', () => {
    let searchPlayersModule: SearchPlayersModule;

    beforeEach(() => {
        searchPlayersModule = new SearchPlayersModule();
    });

    it('should create an instance', () => {
        expect(searchPlayersModule).toBeTruthy();
    });
});
