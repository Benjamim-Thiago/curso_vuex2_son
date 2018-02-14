export class Team{
    constructor(id, name, shield) {
        this.id = id;
        this.name = name;
        this.shield = shield;
        this.points = 0;
        this.gscored = 0;
        this.gconceded = 0;
    }

    updateInfo(p, gs, gc){
        this.points += p;
        this.gscored += gs;
        this.gconceded += gc;
    }

    endOfSoccerMatch(adversaryTeam, goals, adversaryGoals){
        if( goals == adversaryGoals){
            this.updateInfo(1,goals, adversaryGoals);
            adversaryTeam.updateInfo(1, adversaryGoals, goals);
        }else{
            if(goals > adversaryGoals){
                this.updateInfo(3,goals, adversaryGoals);
                adversaryTeam.updateInfo(0, adversaryGoals, goals);
            }else{
                this.updateInfo(0,goals, adversaryGoals);
                adversaryTeam.updateInfo(3, adversaryGoals, goals);
            }
        }
    }
}