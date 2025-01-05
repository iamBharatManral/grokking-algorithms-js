function checkVoter(voted: { [key: string]: boolean }, name: string): void {
  if (voted.hasOwnProperty(name)) {
    console.log('Kick them out!');
    return;
  }
  voted[name] = true;
  console.log('Let them vote!')
}

