import { describe, it, expect } from '@jest/globals';
import express from 'express';
import { app } from '../src/app';

describe('app', () => {
  it('should be an instance of express application', () => {
    expect(app).toBeDefined();
    expect(typeof app).toBe('function');
    // Check if app has express methods
    expect(typeof app.use).toBe('function');
    expect(typeof app.listen).toBe('function');
    // Check if app is created by express()
    expect(app).toBeInstanceOf(express.application.constructor);
  });
});
