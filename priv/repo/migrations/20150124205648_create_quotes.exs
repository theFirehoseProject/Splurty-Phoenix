defmodule Repo.Migrations.CreateQuotes do
  use Ecto.Migration

  def up do
    "CREATE TABLE quotes(id serial primary key, saying varchar(140), author varchar(140));"
  end

  def down do
    "DROP TABLE quotes;"
  end
end
