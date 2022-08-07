import validator from '../src/validator';

describe('validator', () => {
  it('deveria ser um objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('deveria ser uma função', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it('deveria retornar true para "4083952015263"', () => {
      expect(validator.isValid('4083952015263')).toBe(true);
    });

    it('deveria retornar true para "79927398713"', () => {
      expect(validator.isValid('79927398713')).toBe(true);
    });

    it('deveria retornar false para "1234567890"', () => {
      expect(validator.isValid('1234567890')).toBe(false);
    });
  });

  describe('validator.maskify', () => {
    it('deveria  ser uma função', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Deveria retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify('4556364607935616')).toBe('############5616');
    });

    it('Deveria retornar "1" para "1"', () => {
      expect(validator.maskify('1')).toBe('1');
    });

    it('Devería retornar "######orld" para "helloworld"', () => {
      expect(validator.maskify('helloworld')).toBe('######orld');
    });
  });
});
