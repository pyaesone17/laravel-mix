let Task = require('./Task');
let FileCollection = require('../FileCollection');

class ConcatenateFilesTask extends Task {
    /**
     * Run the task.
     */
    run() {
        let combine = this.data;

        this.files = new FileCollection(combine.src);

        this.merge();
    }


    /**
     * Merge the files into one.
     */
    merge() {
        let output = this.files.merge(this.data.output, this.data.babel);

        Mix.addAsset(output);

        this.assets.push(output);
    }


    /**
     * Handle when a relevant source file is changed.
     *
     * @param {string} updatedFile
     */
    onChange(updatedFile) {
        let destination = this.data.output;

        this.merge();
    }
}


module.exports = ConcatenateFilesTask;
