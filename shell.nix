{ sources ? import ./nix/sources.nix }:

with import sources.nixpkgs {};

mkShell {
  name = "rba-github-env";
  buildInputs = [
    jekyll
    bundler
    glibcLocales
  ];
  shellHook = ''
  '';
  preferLocalBuild = true;
}
