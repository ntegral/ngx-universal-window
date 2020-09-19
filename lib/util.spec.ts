
import { join } from 'path';
import { applyDomino } from "./util";

describe('applyDomino', () => {

    it('should be a function', () => {
        const func = applyDomino;
        expect(typeof func).toBe('function');
    })

    it('should have window defined', () => {
        const BROWSER_DIR = join(process.cwd(),'lib')
        applyDomino(global, join(BROWSER_DIR, 'index.spec.html'));
        console.log('did this work',global);
        expect(global.window).toBeDefined();
        let mutationObserver = global['MutationObserver'];
        expect(mutationObserver).toBeDefined();
    })
})