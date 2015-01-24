defmodule Splurty.Endpoint do
  use Phoenix.Endpoint, otp_app: :splurty

  plug Plug.Static,
    at: "/", from: :splurty

  plug Plug.Logger

  # Code reloading will only work if the :code_reloader key of
  # the :phoenix application is set to true in your config file.
  plug Phoenix.CodeReloader

  plug Plug.Parsers,
    parsers: [:urlencoded, :multipart, :json],
    pass: ["*/*"],
    json_decoder: Poison

  plug Plug.MethodOverride
  plug Plug.Head

  plug Plug.Session,
    store: :cookie,
    key: "_splurty_key",
    signing_salt: "Sds97OA2",
    encryption_salt: "jB6stndA"

  plug :router, Splurty.Router
end
