var oriBody = document.getElementsByTagName('body')[0];
document.body.style.transition = 'opacity 0.5s ease-in-out';

setTimeout(() => {
    oriBody.style.opacity = '0';
    setTimeout(() => {
        oriBody.style.display = 'none';

        // interface
        let notube = document.getElementById('notube');

        if (!notube) {
            let notube = document.createElement('body');
            let style = document.createElement('style');

            notube.id = 'notube';
            style.innerHTML = `
                #notube {
                    top: 0;
                    left: 0;
                    width: 100%;
                    min-height: 100vh;
                    opacity: 0;
                }

                #notube-todolist {
                    width: 30%;
                    margin-top: 30px;
                    background: rgb(175, 223, 255);
                    border: 1px solid rgb(83, 159, 229);
                    border-radius: 12px;
                    padding-bottom: 20px;
                }

                #notube-todolist-add {
                    font-size: 1.8rem;
                    border: none;
                    background: transparent;
                    cursor: pointer;
                }

                #notube-todolist-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px;
                }

                #notube-todolist li {
                    border-top: 1px solid rgb(83, 159, 229);
                    padding: 10px 0;
                }
            `

            document.documentElement.appendChild(notube);
            document.documentElement.appendChild(style);
        }

        setTimeout(() => {
            let notube = document.getElementById('notube');
            notube.style.opacity = '1';
            document.getElementById('notube').innerHTML = `
                <div style="padding: 50px;">
                    <h1 style="font-size: 4rem;">NoTube</h1>
                    <div id="notube-todolist">
                        <div id="notube-todolist-header">
                            <h2 style="font-size: 2.2rem;">To-Do List</h2>
                            <button id="notube-todolist-add">+</button>
                        </div>
                        <div style="padding: 0 40px;">
                            <ul style="margin: 0; font-size: 1.6rem;">
                                <li>Do the dishes</li>
                                <li>Summer of Making</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        }, 500);
    }, 500);
}, 0);
