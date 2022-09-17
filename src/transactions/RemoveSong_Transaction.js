import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * Remove_Song_Transaction
 * 
 * This class represents a transaction that removes a song.
 *  It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author Derek Yin
 */

export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initIndex, initSong) {
        super();
        this.app = initApp;
        this.index = initIndex;
        this.song = initSong;
    }

    doTransaction() {
        this.app.removeSong(this.index);
    }
    
    undoTransaction() {
        this.app.addSong(this.index, this.song);
    }
}