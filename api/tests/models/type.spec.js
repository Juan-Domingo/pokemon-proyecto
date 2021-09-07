const { Type, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Tipos de modelo', () => {
    before(() =>
        conn
            .authenticate()
            .then(() => console.log('DB conectada'))
            .catch((err) => {
                console.error('No se puede conectar a la base de datos:', err);
            })
    );
    describe('Validaciones para tipos de modelos', () => {
        beforeEach(() => Type.sync({ force: true }));
        it('Manda error si no existe nombre', (done) => {
            Type.create({})
                .then(() => done(new Error('Requiere un nombre valido')))
                .catch(() => done());
        });
        it('Iniciara cuando tenga nombre valido', (done) => {
            Type.create({ name: 'velocidad' })
                .then(() => done())
                .catch((err) => done(err));
        });
    });
});
