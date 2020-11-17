import { sha256 } from 'js-sha256';

const secret = sha256('very secret message to hash');

export default secret;
