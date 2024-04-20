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
    },
    {
        id: 2,
        title: 'Project 3',
        description: 'Description of Project 3',
        likeCount: 0,
        comments: []
    },
    {
        id: 3,
        title: 'Project 4',
        description: 'Description of Project 4',
        likeCount: 0,
        comments: []
    },
    {
        id: 4,
        title: 'Project 5',
        description: 'Description of Project 5',
        likeCount: 0,
        comments: []
    }
];
webkitURL
function showDetails(projectId) {
    currentProject = projectsData.find(project => project.id === projectId);
    const modal = document.getElementById('projectModal');
    const image = document.getElementById('modalImage');
    const title = document.getElementById('projectTitle');
    const description = document.getElementById('projectDescription');

    image.src = `view/assets/project${currentProject.id + 1}.png`; 
    title.textContent = currentProject.title;
    description.textContent = currentProject.description;

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}
function nextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projectsData.length;
    const image = document.getElementById('modalImage');
    const title = document.getElementById('projectTitle');
    const description = document.getElementById('projectDescription');

    image.src = `view/assets/project${projectsData[currentProjectIndex].id + 1}.png`;
    title.textContent = projectsData[currentProjectIndex].title;
    description.textContent = projectsData[currentProjectIndex].description;
}

function prevProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projectsData.length) % projectsData.length;
    const image = document.getElementById('modalImage');
    const title = document.getElementById('projectTitle');
    const description = document.getElementById('projectDescription');

    image.src = `view/assets/project${projectsData[currentProjectIndex].id + 1}.png`;
    title.textContent = projectsData[currentProjectIndex].title;
    description.textContent = projectsData[currentProjectIndex].description;
}

function showDetails(projectId) {
    currentProjectIndex = projectId;
    const modal = document.getElementById('projectModal');
    const image = document.getElementById('modalImage');
    const title = document.getElementById('projectTitle');
    const description = document.getElementById('projectDescription');

    image.src = `view/assets/project${projectsData[currentProjectIndex].id + 1}.png`;
    title.textContent = projectsData[currentProjectIndex].title;
    description.textContent = projectsData[currentProjectIndex].description;

    modal.style.display = 'block';
}

