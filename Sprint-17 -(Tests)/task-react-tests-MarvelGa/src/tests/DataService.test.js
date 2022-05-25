// TODO: Your test need to be here instead of fake tests

import getGitHubUser from '../services/DataService/index.js'
import mockAxios from 'jest-mock-axios';

it("Data Service Test", async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        info: {
            details: 'Test info'
        }
    }));

    const result = await getGitHubUser('someUser');

    expect(result).toEqual({'info': {'details': 'Test info'}});
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
});