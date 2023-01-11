const generateTeam = team => {
  const addManager = manager => {
        return `
<div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${manager.addName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.addRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.addId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.addEmail()}">${manager.addEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.addOfficeNumber()}</li>
        </ul>
    </div>
</div>
        `;
    };
  
  }

  