import request from 'supertest';
import app from '../../src/app';

describe('POST /auth/register', () => {
    describe('Given all fields', () => {
        it('should return the 201 status code', async () => {
            //Arrange (AAA)

            const userData = {
                firstName: 'Sumit',
                lastName: 'K',
                email: 'sumit@gmail.com',
                password: 'secret',
            };

            // Act (AAA)
            const response = await request(app)
                .post('/auth/register')
                .send(userData);

            // Assert (AAA)
            expect(response.statusCode).toBe(201);
        });
        it('should return valid json response', async () => {
            //Arrange (AAA)

            const userData = {
                firstName: 'Sumit',
                lastName: 'K',
                email: 'sumit@gmail.com',
                password: 'secret',
            };

            // Act (AAA)
            const response = await request(app)
                .post('/auth/register')
                .send(userData);

            // Assert (AAA)
            expect(
                (response.headers as Record<string, string>)['content-type'],
            ).toEqual(expect.stringContaining('json'));
        });
    });
    describe('Fields are missing', () => {});
});
