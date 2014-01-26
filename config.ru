use Rack::Static,
  :urls => ["/js", "/css", "bower_components"],
  :root => "public",
  :index => "index.html"

run Rack::File.new("public")
