import { of } from 'rxjs';
import { UserService } from './user.service';

describe('UserStatisticsService', () => {
	let fakeHttpClient: any;
	let fakeConfigService: any;
	let userService: UserService;

	beforeEach(() => {
		fakeHttpClient = jasmine.createSpyObj('fakeHttpClient', [
			'get',
			'post',
			'put',
			'delete',
		]);

		fakeConfigService = jasmine.createSpyObj('fakeConfigService', [
			'getUserStatisticsUrl',
			'getUserMainCurrencyUrl',
			'getUserAmountUrl',
		]);

		userService = new UserService(fakeHttpClient, fakeConfigService);
	});

	describe('getUserStatistics', () => {
		it('should call HttpGet with right url', () => {
			//Arrange
			fakeConfigService.getUserStatisticsUrl.and.returnValue('user-statistics');
			fakeHttpClient.get.and.returnValue(of('ok'));

			//Act
			userService.getUserStatistics();

			//Assert
			expect(fakeHttpClient.get).toHaveBeenCalledWith('user-statistics');
		});
	});
});
