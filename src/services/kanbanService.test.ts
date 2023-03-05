import { describe, it, expect, vi } from 'vitest';

import axios from 'axios';

import kanbanService from './kanbanService';

vi.mock('axios');

const baseUrl = import.meta.env.VITE_SERVER_URL || 'http://localhost:3000';

// GET
describe('get', () => {
  it('should make a successful GET request', async () => {
    const mockResponse = {
      data: 'test data',
    };
    axios.get.mockResolvedValueOnce(mockResponse);

    const result = await kanbanService.get('/test-query');

    expect(axios.get).toHaveBeenCalledWith(baseUrl + '/test-query');
    expect(result).toEqual('test data');
  });

  describe('fetch tickets', () => {
    test('makes a GET request to fetch tickets', async () => {
      const ticketsMock = [
        {
          id: 1,
          columnId: 0,
          title: 'Poland',
          content: 'Feil Inc',
        },
        {
          id: 2,
          columnId: 0,
          title: 'United States',
          content: 'Hoeger Group',
        },
      ];

      beforeEach(() => {
        axios.get.mockReset();
      });

      axios.get.mockResolvedValue({
        data: ticketsMock,
      });

      const tickets = await kanbanService.get('/tickets');

      expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/tickets`);
      expect(tickets).toStrictEqual(ticketsMock);
    });
  });

  //   it('should handle error request', async () => {
  //     const mockErrorRequest = {
  //       request: 'test error request',
  //     };

  //     axios.get.mockRejectedValueOnce(mockErrorRequest);

  //     await expect(kanbanService.get('test-query')).rejects.toEqual(mockErrorRequest);

  //     expect(console.log).toHaveBeenCalledTimes(3);
  //   });

  //   it('should handle other errors', async () => {
  //     const mockError = new Error('test error');

  //     axios.get.mockRejectedValueOnce(mockError);

  //     await expect(kanbanService.get('test-query')).rejects.toEqual(mockError);

  //     expect(console.log).toHaveBeenCalledTimes(1);
  //   });
});

// POST
describe('create new ticket function', () => {
  const ticket = { title: 'Test Ticket', description: 'This is a test ticket' };

  test('returns created ticket', async () => {
    axios.post.mockResolvedValueOnce({ data: { ...ticket, id: 1 } });

    const result = await kanbanService.create('/tickets', ticket);

    expect(result).toEqual({ ...ticket, id: 1 });
    expect(axios.post).toHaveBeenCalledWith(baseUrl + '/tickets', ticket);
  });

  test('handles error', async () => {
    const error = {
      response: { status: 500, data: 'Internal server error' },
      request: null,
      message: 'Network error',
      config: {},
    };
    axios.post.mockRejectedValueOnce(error);

    const consoleSpy = vi.spyOn(console, 'log');

    await kanbanService.create('/tickets', ticket);

    expect(consoleSpy).toHaveBeenCalledTimes(4);
    expect(consoleSpy).toHaveBeenCalledWith(`Error response status: ${error.response.status}`);
    expect(consoleSpy).toHaveBeenCalledWith('Error message data: ', error.response.data);
    expect(consoleSpy).toHaveBeenCalledWith('Error response headers: ', error.response.headers);
    expect(consoleSpy).toHaveBeenCalledWith('Error config: ', error.config);
  });
});

// PUT
describe('update', () => {
  it('should make a PUT request to the correct URL', () => {
    const mockAxios = vi.spyOn(axios, 'put').mockResolvedValueOnce({ status: 200, data: {} });
    const query = 'tickets/4';
    const data = { id: 4, columnId: 0, title: 'Nigeria', content: 'Botsford and Sons' };
    kanbanService.update(query, data);
    expect(mockAxios).toHaveBeenCalledWith(`${baseUrl}/tickets/4`, data);
  });

  it('should return the response data if the request is successful', async () => {
    const mockAxios = vi.spyOn(axios, 'put').mockResolvedValueOnce({ status: 200, data: { id: 4, columnId: 0, title: 'Nigeria', content: 'Botsford and Sons' } });
    const query = 'tickets/4';
    const data = { id: 4, columnId: 0, title: 'Nigeria', content: 'Botsford and Sons' };
    const result = await kanbanService.update(query, data);
    expect(result).toEqual({ id: 4, columnId: 0, title: 'Nigeria', content: 'Botsford and Sons' });
  });
});
