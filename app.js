const fs = require('fs');
const path = require('path');

const dirPathDir = path.join(__dirname, 'main', 'dir1', 'dir1_1');
const dirPathDir2 = path.join(__dirname, 'main', 'dir2', 'dir2_2')
const mainDir = path.join(__dirname, 'main');

fs.mkdir(dirPathDir, {recursive: true}, errWithCreateDir => {
    console.log(errWithCreateDir);
})
fs.mkdir(dirPathDir2, {recursive: true}, errWithCreateDir => {
    console.log(errWithCreateDir);
})

fs.readdir(mainDir, (errWithReadMainDir, filesInMainDir) => {
    if (errWithReadMainDir) {
        console.log(errWithReadMainDir);
        return;
    }
    filesInMainDir.forEach(fileInMainDir => {
        const fileToReadInMainDir = path.join(mainDir, fileInMainDir)
        fs.stat(fileToReadInMainDir, (errStatMain, statsMain) => {
            if (errStatMain) {
                console.log(errStatMain);
                return;
            }
            if (statsMain.isFile()) {
                fs.rename(path.join(mainDir, fileInMainDir), path.join(mainDir, fileInMainDir), errWithRenameMain => {
                    if (errWithRenameMain) {
                        console.log(errWithRenameMain);
                        return;
                    }
                    console.log('Good')
                })
            } else {
                fs.readdir(path.join(mainDir, fileInMainDir), (errorWithReadInnerDir, filesInInnerDir) => {
                    if (errorWithReadInnerDir) {
                        console.log(errorWithReadInnerDir);
                        return;
                    }
                    filesInInnerDir.forEach(fileInInnerDir => {
                        const fileToReadInnerDir = path.join(mainDir, fileInMainDir, fileInInnerDir)
                        fs.stat(fileToReadInnerDir, (errWithStatInInnerDir, statsInnerDir) => {
                            if (errWithStatInInnerDir) {
                                console.log(errWithStatInInnerDir);
                                return;
                            }
                            if (statsInnerDir.isFile()) {
                                fs.rename(fileToReadInnerDir, path.join(mainDir, fileInInnerDir), errAfterRenameInnerDir => {
                                    if (errAfterRenameInnerDir) {
                                        console.log(errAfterRenameInnerDir);
                                        return;
                                    }
                                    console.log('good')
                                })
                            } else {
                                fs.readdir(fileToReadInnerDir, (errInNextDir, filesInNextDir) => {
                                    if (errInNextDir) {
                                        console.log(errInNextDir);
                                        return;
                                    }
                                    filesInNextDir.forEach(fileInNextDir => {
                                        const filePathToNextDir = path.join(fileToReadInnerDir, fileInNextDir);
                                        fs.stat(filePathToNextDir, (errWithStatInNextDir, statsInNextDir) => {
                                            if (errWithStatInNextDir) {
                                                console.log(errWithStatInNextDir);
                                                return;
                                            }
                                            if (statsInNextDir.isFile()) {
                                                fs.rename(filePathToNextDir, path.join(mainDir, fileInNextDir), errWithRenameFileInNextDir => {
                                                    if (errWithRenameFileInNextDir) {
                                                        console.log(errWithRenameFileInNextDir);
                                                        return;
                                                    }
                                                    console.log('good')
                                                })
                                            }
                                        })
                                    })
                                })
                            }
                        })
                    })
                })
            }
        })
    })
})