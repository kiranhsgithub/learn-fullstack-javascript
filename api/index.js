import express from 'express';
import data from '../src/testData';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
        obj[contest.id] = contest;
        return obj;
    }, {});

router.get('/contests', (req, res) => {
    res.send({
        contests: contests 
    });
});

router.get('/contests/:contestId', (req, res) => {
    //req.params.contestId
    let contest = contests[req.params.contestId];
    
    contest.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper elementum tellus ut dapibus. Sed nulla erat, auctor convallis cursus in, posuere ac lectus. Maecenas consequat urna id venenatis finibus. Suspendisse gravida ullamcorper dapibus. Mauris nec pharetra mauris. Etiam at tempus lorem, quis venenatis urna. Sed ante est, dapibus et gravida eu, porta pulvinar neque. Suspendisse potenti. Fusce eleifend leo vel nisi elementum aliquam. Duis sit amet ante efficitur, commodo nisi in, tempus velit. Maecenas porttitor efficitur nisl, ac convallis arcu finibus vitae. Cras sed leo nunc. Integer gravida felis augue, facilisis egestas mauris convallis aliquam. Nulla dictum magna id cursus aliquet.";
    
    res.send(contest);
});

export default router;
