// let currentProject;
// function showDetails(projectId) {
//     currentProject = projectId;
//     const modal = document.getElementById('projectModal');
//     const image = document.getElementById('modalImage');
//     const title = document.getElementById('projectTitle');
//     const description = document.getElementById('projectDescription');
    
//     image.src = `${projectId}.jpg`;
//     title.textContent = `Project ${projectId}`;
//     description.textContent = `Description of Project ${projectId}`;
//     modal.style.display = 'block';
// }
// function closeModal() {
//     const modal = document.getElementById('projectModal');
//     modal.style.display = 'none';
// }

// let likeCount = 0;
// function like() {
//     likeCount++;
//     document.getElementById('likeCount').textContent = `${likeCount} likes`;
// }

// function comment() {
//     const commentText = document.getElementById('comment').value;
//     const commentDiv = document.getElementById('comments');
//     const newComment = document.createElement('div');
//     newComment.textContent = commentText;
//     commentDiv.appendChild(newComment);
//     document.getElementById('comment').value = '';
// }
let currentProject;
    let projectsData = [
        {
            id: 0,
            title: 'Project 1',
            description: 'Description of Project 1',
            likeCount: 0,
            comments: []
        },
        {
            id: 1,
            title: 'Project 2',
            description: 'Description of Project 2',
            likeCount: 0,
            comments: []
        }
    ];

    function showDetails(projectId) {
        currentProject = projectsData.find(project => project.id === projectId);
        const modal = document.getElementById('projectModal');
        const image = document.getElementById('modalImage');
        const title = document.getElementById('projectTitle');
        const description = document.getElementById('projectDescription');
        const likeCountDisplay = document.getElementById('likeCount');
        const commentsDisplay = document.getElementById('comments');

        image.src = `view/assets/project${currentProject.id + 1}.png`; 
        title.textContent = currentProject.title;
        description.textContent = currentProject.description;
        likeCountDisplay.textContent = `${currentProject.likeCount} likes`;
        commentsDisplay.innerHTML = '';
        currentProject.comments.forEach(comment => {
            const newComment = document.createElement('div');
            newComment.textContent = comment;
            commentsDisplay.appendChild(newComment);
        });

        modal.style.display = 'block';
    }

    function closeModal() {
        const modal = document.getElementById('projectModal');
        modal.style.display = 'none';
    }

    function like() {
        currentProject.likeCount++;
        document.getElementById('likeCount').textContent = `${currentProject.likeCount} likes`;
    }

    function comment() {
        const commentText = document.getElementById('comment').value;
        currentProject.comments.push(commentText);
        const commentDiv = document.getElementById('comments');
        const newComment = document.createElement('div');
        newComment.textContent = commentText;
        commentDiv.appendChild(newComment);
        document.getElementById('comment').value = '';
    }