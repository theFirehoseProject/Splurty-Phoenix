defmodule Repo do
  use Ecto.Repo, adapter: Ecto.Adapters.Postgres

  def conf do
    parse_url Application.get_env(:phoenix, :database)[:url]
  end

  def priv do
    app_dir(:splurty, "priv/repo")
  end
end
