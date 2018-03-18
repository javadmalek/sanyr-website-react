process.env.NODE_ENV = 'test';
let mongoose = require("mongoose");
let Consult = require('../models/sanyr_consult');

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Consult', () => {
    const correctConsult = {
        name: "Javad Malek Shahkoohi",
        email: "mrjavad@gmail.com",
        company: "SANYR",
        solution: "software",
        message: "Test API - check consult saved or not"
    };
    const wrongConsultNoSolution = {
        name: "Javad Malek Shahkoohi",
        email: "mrjavad@gmail.com",
        company: "SANYR",
        message: "Test API - check consult saved or not"
    };
    const wrongConsultBadEmail = {
        name: "Javad Malek Shahkoohi",
        email: "mrjavad.com",
        company: "SANYR",
        solution: "software",
        message: "Test API - check consult saved or not"
    };

    describe('/POST Consult Actions', () => {
        it('it should Save a Consult.', (done) => {
            chai.request(app)
                .post('/api/sanyr/send-consult')
                .send(correctConsult)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success');
                    res.body.success.should.be.equal(true);
                    res.body.should.have.property('msg');
                    res.body.msg.should.be.equal('Successful Saved new consult.');
                    done();
                });
        });

        it('it should NOT Save a Consult because the solution filed is empty.', (done) => {
            chai.request(app)
                .post('/api/sanyr/send-consult')
                .send(wrongConsultNoSolution)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success');
                    res.body.success.should.be.equal(false);
                    res.body.should.have.property('msg');
                    res.body.msg.should.be.equal('NotSaved: Please fill the consult fom completely.');
                    done();
                })
        });

        it('it should NOT Save a Consult because the email address is wrong.', (done) => {
            chai.request(app)
                .post('/api/sanyr/send-consult')
                .send(wrongConsultBadEmail)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success');
                    res.body.success.should.be.equal(false);
                    res.body.should.have.property('msg');
                    res.body.msg.should.be.equal('Save consult failed.');
                    done();
                })
        });

    });
});