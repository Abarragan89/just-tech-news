'use strict';
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

// if we make a request to any api endpoint that doesn't exist, then they get a 404. 
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;