const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Modelos de pokemon', () => {
    before(() =>
        conn
            .authenticate()
            .then(() => console.log('DB connectada'))
            .catch((err) => {
                console.error('No se puede conectar a la base de datos:', err);
            })
    );
    describe('Validaciones para modelos de pokemon', () => {
        beforeEach(() => Pokemon.sync({ force: true }));
        describe('nombre', () => {
            it('manda error si no hay nombre', (done) => {
                Pokemon.create({ hp: 200, attack: 1000 })
                    .then(() => done(new Error('Requiere un nombre valido')))
                    .catch(() => done());
            });
            it('Iniciara cuando tenga un nombre valido', () => {
                Pokemon.create({ name: 'Mejor pokemon' });
            });
        });
    });
});
