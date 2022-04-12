{ sources ? import ./nix/sources.nix }:

with import sources.nixpkgs {};

mkShell {
  name = "rba-github-env";
  buildInputs = [
    go
    hugo
    nodejs
    docker-compose
    glibcLocales
  ];
  shellHook = ''
  '';
  preferLocalBuild = true;
}
