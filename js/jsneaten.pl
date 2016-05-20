#!/usr/bin/perl

$increment=0;

while (<STDIN>)
{
  $line = $_;
  chomp $line;
  @mess = split(/</,$line);
  foreach $tangle (@mess)
  {
    if (length($tangle))
    {
      $tangle = '<'.$tangle;
      if ($tangle =~ /<\//)
      {
        $increment -= 2;
      }
      else
      {
        $increment += 2;
      }
      $increment = 0 if $increment < 0;
      for ($i = 0; $i < $increment; $i++)
      {
        print " ";
      }
      print "$tangle\n";
    }
  }
}
