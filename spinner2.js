const spin = "|/-\\|/-\\|";

for (let i = 0; i < spin.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + spin[i] + '   ');
    if (i === spin.length - 1) console.log();
  }, 100 + i * 200);
}