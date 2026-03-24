import type { Request, Response } from 'express';
import * as controllers from '../../app_server/controllers/locations.js';

describe('locations controller', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: jest.Mock;

  beforeEach(() => {
    req = {};
    res = {
      render: jest.fn() as any
    };
    next = jest.fn();
  });

  test('homelist renders locations-list with expected data', () => {
    controllers.homelist(req as Request, res as Response, next as any);
    
    expect(res.render).toHaveBeenCalledWith('locations-list', expect.objectContaining({
      title: 'Loc8r - find a place to work with wifi',
      pageHeader: expect.objectContaining({ title: 'Loc8r' }),
      locations: expect.any(Array)
    }));
  });

  test('locationInfo renders location-info with title', () => {
    controllers.locationInfo(req as Request, res as Response, next as any);
    
    expect(res.render).toHaveBeenCalledWith('location-info', expect.objectContaining({
      title: 'Location info'
    }));
  });

  test('addReview renders location-review-form with title', () => {
    controllers.addReview(req as Request, res as Response, next as any);
    
    expect(res.render).toHaveBeenCalledWith('location-review-form', expect.objectContaining({
      title: 'Add review'
    }));
  });
});