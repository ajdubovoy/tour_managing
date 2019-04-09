class Booking < ApplicationRecord
  enum status: [
    :todo,
    :failed,
    :contacted,
    :replied,
    :in_progress,
    :confirmed
  ]
end
